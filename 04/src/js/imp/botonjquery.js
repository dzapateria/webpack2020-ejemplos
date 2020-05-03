
export function botonjquery(){
    $(document).ready(function () {
        $("#hide").click(function () {
            $("p").hide();
        });
        $("#show").click(function () {
            $("p").show();
        });
    });
}


console.log('soy el boton jquery');

export const precio = 200;