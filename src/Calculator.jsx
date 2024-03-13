import s from "./Calculator.module.css"
import { useRef, useEffect } from "react"

const Calculator = () => {
    
    const keyboard = useRef()
    const screenResult = useRef()
    useEffect(() => {
        let keyboardArr = [...keyboard.current.children]
        
            keyboardArr.forEach((item) => {
                if (item.tagName === "SPAN") {
                    item.onclick = () => {
                        screenResult.current.innerHTML += item.textContent;
                    };
                }
            });
        
    }, [])

    return (
        <section className={s.calculator}>
            <header>
                <span>calc</span>
                <div className={s.toogle}>
                    <span>THEME</span>
                </div>
            </header>
            <main>
                <div className={s.calculatorScreen}>
                    <p ref={screenResult}></p>
                </div>
                <div className={s.calculatorKeyboard}>
                    <div ref={keyboard} className={s.keyboardMain}>

                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <button onClick={()=>{
                            screenResult.current.innerHTML = screenResult.current.innerHTML.slice(0, screenResult.current.innerHTML.length - 1)
                        }}>DEL</button>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>+</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>-</span>
                        <span>.</span>
                        <span>0</span>
                        <span>/</span>
                        <span>x</span>
                    </div>
                    <div className={s.keyboardButtons}>
                        <button onClick={()=>screenResult.current.innerHTML = ''} className={s.resetBtn}>RESET</button>
                        <button onClick={()=>{
                        
                        }} className={s.equalBtn}>=</button>
                    </div>

                </div>
            </main>
        </section>
    )

}

export default Calculator