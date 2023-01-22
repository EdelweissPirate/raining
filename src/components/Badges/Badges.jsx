import { 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiNodedotjs, 
    SiSolidity, 
    SiReact,
    SiTailwindcss, 
    SiElectron, 
    SiMongodb,
    SiThreedotjs,
    SiBlender
} from "react-icons/si"

import './badges.css'

function Badges({ solidity=true, react=true, tailwind=true, electron=true, mongo=true, three=true, blender=true, dataType }) {
    return (
        <aside style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '1em 0'}}>
            <div className="badges" data-type={dataType}>

                <SiHtml5 title='HTML5' size={24} />
                <SiCss3 title='CSS3' size={24} />
                <SiJavascript title='Javascript' size={24} />
                <SiNodedotjs title='NodeJS' size={24} />
                {solidity ? <SiSolidity title='SolidityJS' size={24} /> : null}
                {react ? <SiReact title='ReactJS' size={24} /> : null}
                {tailwind ? <SiTailwindcss title='TailwindCSS' size={24} /> : null}
                {electron ? <SiElectron title='ElectronJS' size={24} /> : null}
                {mongo ? <SiMongodb title='MongoDB' size={24} /> : null}
                {three ? <SiThreedotjs title='ThreeJS' size={24} /> : null}
                {blender ? <SiBlender title='Blender' size={24} /> : null}

            </div>
        </aside>
    )
}

export default Badges