import { LinkNewWindow } from '../components/Link';
import { Link } from 'react-router-dom';

export default function Home(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className='text-5xl.'>Home</h1>
            <h2>Pages</h2>
            <li><Link to="/issues" className="text-sky-300">Issues</Link></li>
            <li><Link to="/summary" className="text-sky-300">Summary</Link></li>

            <h2>Credits</h2>
            <LinkNewWindow href="https://www.shadertoy.com/view/4tdSWr">Background: By @Drift</LinkNewWindow>
            <br/>
            <LinkNewWindow href="https://github.com/Intermentality/EINTY-IWeb">Github Project Files</LinkNewWindow>
        </article>
    </div>
}