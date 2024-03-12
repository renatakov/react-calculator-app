import s from "./Calculator.module.css"

const Calculator = () => {
return(
    <section className={s.calculator}>
    <header>
        <span>calc</span>
        <div className={s.toogle}>
            <span>THEME</span>
        </div>
    </header>
    <main>
        <div className={s.calculatorScreen}>

            <p></p>
        </div>
        <div className={s.calculatorKeyboard}>
            <div className={s.keyboardMain}>

            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            </div>
        </div>
        
    </main>
    </section>
)

}

export default Calculator