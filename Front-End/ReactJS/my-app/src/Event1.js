function Football (){
    /* Program 1 */
    // const shoot = () => {
    //     console.log("Shooting the ball!");
    //     alert("Great Shot!");
    // }
/* Program 2 */
    // const shoot = (a) => {
    //     console.log("Shooting the ball!");
    //     alert(a);
    // }


    /* Program 3  To Check for Event Object */

    // const shoot = (a,b) => {
    //     console.log("Shooting the ball!");
    //     alert(a + " " + b.type);
    // }

       /* Program 4  Forms */
    return (
        <div>
            <h2>Football Game</h2>
            <button onClick={(event) => shoot("Goal", event)}>Shoot</button>
        </div>
    );
}
export default Football;