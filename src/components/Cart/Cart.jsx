/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/*  eslint-disable-next-line no-unused-vars*/
import React from 'react';
const Cart = ({selectedCourses,remaining,totalCredit,totalCost}) => {
    return (
        <div className="text-left bg-white p-5 border-red-500 rounded-lg">
            <h5 className="text-blue-500 text-lg font-bold border-b border-gray-300 pb-2">
                Credit Hour Remaining: {remaining} hr
            </h5>
            <h6 className="text-black text-lg font-bold pt-3">Course Name</h6>
            <div className="p-4">                
                <ol className="list-decimal">
                    {
                        selectedCourses.map((course) => (
                            <li key={course.id} className="text-zinc-400 text-base">{course.title}</li>
                        ))
                    }
                    
                </ol>
            </div>
            <p className="text-base text-stone-900 font-bold border-y border-gray-300 py-3">
                Total Credit Hour: {totalCredit}
            </p>
            <p className="text-stone-900 font-bold text-base pt-2">Total price: {totalCost} USD</p>
        </div>
    );
};
export default Cart;