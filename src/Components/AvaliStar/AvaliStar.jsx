import { useState } from "react";
import './AvaliStar.css'

export default function AvaliStar() {
    const [starAvaliacao, setStarAvaliacao] = useState(0)

    const click = (index) => {
        setStarAvaliacao(index + 1)
    }
        return (
            <div className="star-Avaliacao">
                {[1,2,3,4,5].map((index) => {
                    return (
                        <svg
                            key={index}
                            className={index < starAvaliacao ? "star preenchida" : "star"}
                            onClick={() => click(index)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L9.28 8.5H2.5L8.75 12.76L6.79 19.3L12 15.7L17.21 19.3L15.25 12.76L21.5 8.5H14.72L12 2Z" />
                        </svg>
                    );
                })}
            </div>
        );
}
