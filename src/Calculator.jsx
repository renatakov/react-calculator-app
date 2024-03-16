import { logDOM } from "@testing-library/react"
import s from "./Calculator.module.css"
import { useRef, useEffect } from "react"

const Calculator = () => {
    const body = document.querySelector('body')
    console.dir(body);
    const section = useRef()
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
        <section ref={section} className={s.calculator}>
            <header>
                <span>calc</span>
                <div className={s.toggle}>
                    <span>THEME</span>
                    <div className={s.mainToggle}>
                        <div className={s.toggleLabels}>

                            <label>1</label>
                            <label>2</label>
                            <label>3</label>
                        </div>
                        <div className={s.toggleInputs}>

                            <input onChange={() => {
                                section.current.classList.remove(`${s.theme2}`, `${s.theme3}`);
                                body.classList.remove(`${s.theme2}`, `${s.theme3}`);
                                section.current.classList.add(`${s.theme1}`);
                                body.classList.add(`${s.theme1}`);
                            }} type="radio" name="toggle_input" />
                            <input className={s.toggleInput2} onChange={() => {
                                section.current.classList.remove(`${s.theme1}`, `${s.theme3}`);
                                body.classList.remove(`${s.theme1}`, `${s.theme3}`);
                                section.current.classList.add(`${s.theme2}`);
                                body.classList.add(`${s.theme2}`);
                            }} type="radio" name="toggle_input" />
                            <input onChange={() => {
                                section.current.classList.remove(`${s.theme1}`, `${s.theme2}`);
                                body.classList.remove(`${s.theme1}`, `${s.theme2}`);
                                section.current.classList.add(`${s.theme3}`);
                                body.classList.add(`${s.theme3}`);
                            }} type="radio" name="toggle_input" />
                        </div>
                    </div>
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
                        <button onClick={() => {
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
                        <button onClick={() => screenResult.current.innerHTML = ''} className={s.resetBtn}>RESET</button>
                        <button onClick={() => {
                            let arr = screenResult.current.textContent.replace(/[x/+-]/g, ' $& ').split(' ');
                            let s = 0;
                            s = parseFloat(arr[0])
                            for (let i = 0; i < arr.length; i++) {
                                if (arr[i] === '+') {
                                    s += parseFloat(arr[i + 1])
                                } else if (arr[i] === '-') {
                                    s -= parseFloat(arr[i + 1])
                                } else if (arr[i] === 'x') {
                                    s *= parseFloat(arr[i + 1])
                                } else if (arr[i] === '/') {
                                    s /= parseFloat(arr[i + 1])
                                }

                            }
                            screenResult.current.innerHTML = `${s}`
                        }} className={s.equalBtn}>=</button>
                    </div>

                </div>
            </main>
        </section>
    )

}

export default Calculator