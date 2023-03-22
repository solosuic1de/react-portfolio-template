import React from "react";
import Specialization from "../Specializations";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
    return (
        <>
            <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
                <div>
                    <h1 className="tablet:m-3 mt-2 text-xl laptop:text-xl w-full laptop:w-4/5">Мої контакти.</h1>
                    <p className="tablet:m-2 mt-2 text-xl laptop:text-xl w-full laptop:w-4/5">Пошта: serhiichuk.yl@gmail.com</p>
                    <p className="tablet:m-2 mt-2 text-xl laptop:text-xl w-full laptop:w-4/5">Номер телефону: +380 (99) 625 17 54</p>
                    <div className="mt-12">
                        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                            ДАВАЙТЕ ПРАЦЮВАТИ РАЗОМ
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
