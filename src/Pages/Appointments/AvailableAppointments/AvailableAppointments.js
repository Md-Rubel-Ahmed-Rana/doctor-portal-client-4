import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/appointmentOptions")
        .then((res) => res.json())
        .then((data) => setAppointmentOptions(data))
    }, [])

    return (
        <div className='m-5'>
            <h2 className='text-center text-primary font-bold my-5'>Available Appointments on {format(selectedDate, "PP")}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appointmentOptions.map((appointmentOption, index) => <AppointmentOptions
                        key={index}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}

                    />)
                }
            </div>
            { treatment && <BookingModal 
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
             />}
        </div>
    );
};

export default AvailableAppointments;