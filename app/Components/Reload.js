"use client"
import { useEffect, useState } from "react";

const Reload = () => {
    const [isReloading, setIsReloading] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = () => {
            setIsReloading(true);
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return (
        <>
            {isReloading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <img src="/reload.gif" alt="Loading..." className="sm:w-24 sm:h-24 w-16 h-16"  />
                </div>
            )}
        </>
    );
};

export default Reload;
