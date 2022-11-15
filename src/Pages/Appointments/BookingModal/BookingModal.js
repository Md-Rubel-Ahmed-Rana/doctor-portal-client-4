import { format } from 'date-fns';
import React from 'react';
import swal from 'sweetalert';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, "PP");

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value
        const slot = form.slot.value
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        };
        setTreatment(null);
        swal("Good job!", "Booking completed", "success");
        console.log(booking);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleBooking} className="modal-box relative text-center">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-2">{name}</h3>
                    <input type="text" name='date'   value={date} readOnly className="input mb-2 input-bordered input-primary w-full max-w-xs" />
                    <select name="slot" className="select  select-bordered w-full mb-3 max-w-xs">
                        {
                            slots.map((slot, index) => <option  key={index} value={slot}>{slot}</option>)
                        }
                    </select>
                    <input type="text" name='name' placeholder="Your Name" className="input mb-3 input-bordered input-primary w-full max-w-xs" />
                    <input type="email" name='email' placeholder="Email Address" className="input mb-3 input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input mb-3 input-bordered input-primary w-full max-w-xs" />
                    <input type="submit" placeholder="Type here" className="btn btn-primary mb-2 input-primary w-full max-w-xs" />
                </form>
            </div>
        </>
    );
};

export default BookingModal;