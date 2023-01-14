function Image(props){
    return(
        <>
        <img src={`./source/${props.color}.png`} alt="상세이미지" />
        </>
    )
}



export default Image;