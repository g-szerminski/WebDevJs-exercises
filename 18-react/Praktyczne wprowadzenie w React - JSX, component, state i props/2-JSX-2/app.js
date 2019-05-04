const header = <h1 className='title'>Witaj na stronie!</h1>
const classBig = 'big';
const handleClick = () => alert('kliknięte !');
const main = (
    <div>
        <h1 onClick={handleClick} className='red'>Pierwszy artykuł</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque enim, ad quos unde exercitationem at ab suscipit error voluptatum expedita labore similique. Reiciendis doloribus blanditiis voluptates facere aliquid minima.</p>
    </div>
)
const text = 'stopkaaa';
const largeTxt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel provident asperiores deserunt, voluptatem suscipit ducimus sequi ipsum aperiam, vero, consequuntur deleniti eius quod dolor natus nam ad harum porro rerum?';

const footer = (
    <footer className={classBig}>
        {/* <p>Stopka</p> */}
        <p>{text}</p>
        {largeTxt}
    </footer>
)

const app = [header, main, footer];
ReactDOM.render(app, document.getElementById('root'))