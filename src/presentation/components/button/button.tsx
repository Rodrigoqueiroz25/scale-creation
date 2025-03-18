import styles from "./button.module.css";
import React, {ReactNode} from "react";

type ButtonProps = {
    title: string;
    // handleClick?: () => void;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
    path: ReactNode;
}

export default function Button({ handleClick, title, path }: ButtonProps) {

    return (
        <button
            className={styles.card}
            // type="submit"
            onClick={handleClick}
        >
            <svg
                className={styles.materialIcons}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <g>
                    {path}
                </g>
            </svg>
            <span>{title}</span>
        </button>
    )
}