import "../Custom_entities/css/Image.css";
const Image = ({style = {}, src}) => {
    return (<>
        <img className="imageX" style={{...style}} src={src} />
        <i className="imageX" style={{position: "absolute", width: '100%', height: '100%', top:'0', left: '0',}}></i>
        {/* // <i style={{
        //     display: 'inline-block',
        //     backgroundImage: `url(${src})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "100% 100%",
        //     ...style,
        //   }}></i> */}
    </>)
}

export default Image;