
export const authHook = () => {

    function authTrue(){
        const dt = localStorage.getItem('Session');
        if(dt){
            return true;
        }else{
            return false;
        }
    }


    function passData(){
        const dt = localStorage.getItem('Session');
        if(dt){
            return dt;
        }else{
            return false;
        }
    }
    return { authTrue, passData };

}

