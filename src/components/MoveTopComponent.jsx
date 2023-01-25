import { useEffect } from "react";

function MoveTopComponent() {

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("movetop").style.display = "block";
        } else {
            document.getElementById("movetop").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        scrollFunction();
        window.onscroll = function() {scrollFunction()};
    }, []);

    return (
        <>
            <button onClick={topFunction} id="movetop" title="Go to top">
                <span className="fa fa-angle-up"></span>
            </button>
        </>
    )
}

export default MoveTopComponent;