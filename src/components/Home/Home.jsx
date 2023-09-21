/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
    const [allCourses, setAllcourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [remaining, setRemaining] = useState([20]);
    const [totalCredit, setTotalCredit] = useState([0]);
    useEffect(() =>{
        fetch("./data.json")
        fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setAllcourses(data));
    }, []);
    const handleSelectCourse = (course) =>{
        toast.dismiss();
        const isExist = selectedCourses.find((item) => item.id == course.id);
        let hour = course.credit;
        let cost = course.price;
        if (isExist) {
            toast.error('Course is already taken!');
        } else {
            selectedCourses.forEach((item) => {
                hour += item.credit;
                 cost += item.price ;
            });
            const totalRemaining = 20 - hour;
            if (hour > 20) {
                toast.error('Credit hour limit is over!');
            } else {
                setTotalCredit([hour]);
                setRemaining(totalRemaining);
                setTotalCost(cost);
                setSelectedCourses([...selectedCourses, course]); 
            }            
        }      
    };
    return (
        <div className=" container mx-auto">
            <h1 className="font-bold text-center mt-10 text-2xl mb-4">Course Registration</h1>
            <div className="flex gap-8 justify-between my-10">
                <div className="grid gap-x-8 gap-y-8 grid-cols-3">
                {      
                    allCourses.map((course) => (
                    <div key={course.id} className="bg-white p-4  rounded-2xl">
                        <div className=" ">
                            <img className="w-full" src={course.image} alt="Courses information" />
                            <h2 className="text-xl font-bold py-5">{course.title}</h2>
                            <p className="text-zinc-400 text-lg">{course?.description}
                            </p>
                            <div className="flex justify-between py-5">
                                <div className="flex items-center">
                                    <img className="w-4 h-4 " src="./dollar-sign.png" alt="" />
                                    <p className="text-lg font-semibold pl-4 text-zinc-400">
                                        Price : {course?.price}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-4 h-4 " src="./bookmark.png" alt="" />
                                    <p className="text-lg font-semibold pl-4 text-zinc-400">
                                        Credit: {course?.credit} hr
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => handleSelectCourse(course)} 
                            className="bg-cyan-500 px-8 py-3 text-base w-full text-white rounded-lg ">
                            Select
                        </button>
                    </div>
                    ))  
                }
                </div>                
                <Toaster
                    toastOptions={{
                        error: {
                        style: {
                            border: '1px solid #713200',
                            padding: '16px',
                            background: 'white',
                            color: '#ff0000',
                            font: '20px',
                        },
                        },
                    }}
                    />
                <div className="w-[900px]">            
                    <Cart 
                    selectedCourses={selectedCourses} 
                    remaining={remaining} 
                    totalCost={totalCost} 
                    totalCredit={totalCredit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;