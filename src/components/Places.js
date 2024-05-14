'use client';
import { Armchair } from 'lucide-react';
import React, { useState } from 'react';

export default function Places({ selectedSeats }) {
    const [promocode, setPromocode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [isPromocodeApplied, setIsPromocodeApplied] = useState(false);
    const [ticketType, setTicketType] = useState('Adult');
    const [foodDrinkSelections, setFoodDrinkSelections] = useState([]);

    const handlePromocodeChange = (event) => {
        setPromocode(event.target.value);
    };

    const handleApplyPromocode = () => {
        if (promocode === 'DISCOUNT10') {
            setDiscount(0.1); // 10% discount
            setIsPromocodeApplied(true);
            alert('Promocode applied! 10% discount');
        } else {
            setIsPromocodeApplied(false);
            alert('Invalid promocode');
        }
    };

    const handleTicketTypeChange = (event) => {
        setTicketType(event.target.value);
    };

    const handleFoodDrinkChange = (event) => {
        const { name, checked } = event.target;
        setFoodDrinkSelections(prevSelections => {
            if (checked) {
                return [...prevSelections, name];
            } else {
                return prevSelections.filter(item => item !== name);
            }
        });
    };

    const seatPrices = {
        'Adult': 20,
        'Kid': 10,
    };

    const foodDrinkPrices = {
        'Compo 1': 5,
        'Compo 2': 2,
    };

    const seatPrice = seatPrices[ticketType];
    const totalSeatPrice = selectedSeats.length * seatPrice;
    const totalFoodDrinkPrice = foodDrinkSelections.reduce((total, item) => total + foodDrinkPrices[item], 0);
    const totalPrice = totalSeatPrice + totalFoodDrinkPrice;
    const discountedPrice = totalPrice * (1 - discount);

    return (
        <div className="h-[400px] w-2/3 bg-glass p-8 flex mb-4 rounded-lg shadow-md mx-auto">
            <div className="w-1/2 h-full p-4 border-r-2 border-gray-300 flex flex-col gap-y-2">
                <p className="font-bold text-2xl mb-4">Booking Information</p>
                <div className="flex flex-col space-y-2 h-2/3">
                    <div className='flex flex-col'>
                        <label htmlFor="ticketType" className="block mb-2">Ticket Type:</label>
                        <div>
                            {Object.keys(seatPrices).map(type => (
                                <label key={type} className="flex items-center mb-2">
                                    <input 
                                        type="radio" 
                                        name="ticketType" 
                                        value={type}
                                        className="mr-2"
                                        checked={ticketType === type}
                                        onChange={handleTicketTypeChange}
                                    />
                                    {type}
                                </label>
                            ))}
                            <label className="block mb-2">Food & Drinks:</label>
                            {Object.keys(foodDrinkPrices).map(item => (
                                <label key={item} className="flex items-center mb-2">
                                    <input 
                                        type="checkbox" 
                                        name={item} 
                                        className="mr-2"
                                        onChange={handleFoodDrinkChange}
                                    />
                                    {item} - {foodDrinkPrices[item]}$
                                </label>
                            ))}
                        </div>
                    </div>
                    
                    <input 
                        type="text" 
                        placeholder="Enter promocode" 
                        className="p-3 w-full rounded-lg bg-transparent border" 
                        value={promocode}
                        onChange={handlePromocodeChange}
                    />
                </div>
            </div>
            <div className="w-1/2 h-full p-4 flex flex-col gap-y-2">
                <h2 className="font-bold text-2xl mb-4">Selected Seats</h2>
                <div className="space-y-4 overflow-y-auto max-h-60 h-[80%] ">
                    <div className="grid grid-cols-4 gap-y-2">
                        {selectedSeats.map(seat => (
                            <div key={seat} className="text-lg flex items-center gap-x-2">
                                <Armchair />
                                {seat}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="font-bold text-xl">Total:</p>
                    <p className="text-xl">{isPromocodeApplied ? `${discountedPrice.toFixed(2)}$` : `${totalPrice}$`}</p>
                </div>
                <button 
                    className="bg-green-500 text-white p-3 rounded w-full hover:bg-green-600 transition duration-200"
                >
                    Apply to Checkout
                </button>
            </div>
        </div>
    );
}
