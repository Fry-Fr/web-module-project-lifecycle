import Card from './Card';

const Cards =(props) => {
    return (
        <div>
            {props.data.map( (item,index) => {
                return(
                    <Card key={index} data={item}/>
                )
            })}
        </div>
    )
}
export default Cards;