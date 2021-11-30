import React from 'react'
import './login.css';
import {Button} from '@material-ui/core';
import {auth, provider} from '../../firebase';
import { useDispatch } from 'react-redux';
import {login} from '../../features/userSlice';

const Login = () => {

    const dispatch = useDispatch();

    const signIn = () =>{
        auth.signInWithPopup(provider)
            .then(({user}) =>{
                dispatch(
                    login({
                        displayName:user.displayName,
                        email:user.email,
                        photoUrl:user.photoURL,
                    })
                )
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABX1BMVEX////qQjVDhfU0qFNfYmfFIR9fYmn8vAP//v////1eY2f///lQU1xUV17Gys1zpvgxp05RtW3Z2txBhvM1f/YxqFn09fba5fkko0Xm5+haXWPqODn9wgCanqGHi4zf4OKAg4mpqq3qRDNVWVzZ7dqxsrb/+v/2///sQjPBAAD8tQDDGBXSZGH8xT9PVVf/vQC9v8FqbnLks6/TbGvKQT756bT8z2f6y1X54p3v1tbMExTHQUX+9OH5vyH46r78//Py39m9JhzaoaLywgXJHyL+1Hbox8b76en83KHYiYfoJCfpsaT1x8DcQzLvLR7tenPymYrlPCbhUELoZGH0qqLfQiDlQz/71MzoJxL2eHv5kI94nvmhRGXjPBHPuBJ/YpuftTBWfNrEHy7wd2Vps0KtQXJKheUpj/6EYrKtsjC6L1N0rEWcS3zKzuPyXEf1xLpgtXidzrGOt/UaqUJ5w5ELkaFUAAAJ0UlEQVR4nO2bjVfiVhbAHxpDPgjDBMyYIB8hxQSpmHSm7Y5Ti6xuZ9cqlXHKTL9mO07Xdj+6drf7/5+99wUkAiMBkXP03N/xaMDkmfy87777XgJjBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQxN1CkuCbLMXbWZaZHP6Ab0ziP+8TcEGu8dHjJ08ef2SAFHmyF1UFJfLGx59sbX36B9hWVXURJ7o4UMHTJ7Wdg/pO7dlTCBfJnXgI25Ddzz7ZTAKbu5+z5sY9ixNZcvdq9ZVWq1Vv7dT+KLvSxAuUmqr7+frmPjpJ7ic/dqV7Fidg5Vn9oFU/ODhYWWnVPpSYCqHy/v4jI+6fksl1riS5ub3fbMZMQ3cFiX1RWxlQb+0x170mVDYgGT/fSkb5s3vP4kRmf9mJODmoH34psWv+7+6GfJTfjyrZ/JQ1F3e+i0BmH9ZXohy3v1KvSbOSetLO7+9GpWw171uOHXGS6Lx46krSmFiBYZc9P+14+fV+Nuk5meYPmrqe1nUTN+ebhsJ/zKBWkmcum0acJCqJw87LscOPrLpHX7criXzUCDiJnU4kvyhajuNYlhUU0/POzHYQFEInBdsulNgcnXiVbr7zblz/cTdO2l430ZnRiWE7miWKAiCK6KZgzHjSY7EbguCU+WbKslLpeTpJ5L2K1+m+wtiONAtbz0/bFfjdSJzE6DtwdNpxFAR8CPADzFiOP+NZj6MBbSoNs7fp3MCJKj/eWWlhcTLoO4j3GvoPNosRjiOR5F4kPP6rq07Wk1vy5EBRpYKGAWJpWhCUg8BxBBAjanMMlQba1riTFGykZ2/JZY+hPmnVh50kEq+/MXio4F4gRv223VMySz6Ryg4PjKJvGjBbMky/7GA/coqzn/oQRWjPCvjmDZ3I6nff13ZaK6NOEl+/eOWGuRaKkr3THxL5USe728k3D2MEaRn6jaCVzchbelkDJzc49SGMcioVhH/gxk4eLP211jqA+v5gyEnC67zECRH2nyPPy1cqQ05wFrj9Y+bhhNoejBUwlTT86AAJP+0UnPkcaxvTDNudh5Ps27PaWf1sOE6AzjsDl0fkk3Y38m7Pyfr+enL3p0zmoTppVE07mDv0kfer6TnXKD3m4SR3/n3tbGeMk8Rh95XLnr+A8WbUCQTKm+XV1clODMyuc+wlE5mDk6VsFvpPfZwT7D9HlQ4ULWPiJPn31eXl5clObMh+mj37OU7NPJwsZZeW3j6rHYw4QRWdjjfkKXSyufsTKMlMdmIEECbBBG9hWuEDf7pqV9MGfwu+DL1q276OiS3ShAk7wV7m+Mbm4mRp6eds9m+11tlInIwDnexuv8ksr2bixEkaKpOJ1ZlsYt0CZZAtQOkP5X9YuUi2CNswHQj8yPwoXbY03Anerl62YARAiW/Oycl57vznX7D/xHOyvg39ZjUTq+8ULKjPJuZSswEFHTMVrGN4dSdCEJiC1XspaJeVjBE0eBkcvh30Y8VoWEJDn6eT3Hkuu/T2H7WVbiwn+/9czUC3WY7hRIKuY00uzUyIJqtk8VLXQotiYJiOEr4WxUFGMvkMAd8OZ09ObzwzNEVM6fMai3tkc9nsv2rHECiVa714+e03ywOudyLBucJ1+RNnHyZUcEIAcVH0/WrZgsrfKgSW4gR22ocNDAnsGLKh4CxSK9vptF+EWhheGD0nojJ3J0sQKdlfXue964Qkjj2v/SNPJDGdmCm4BD2eE8HqdQWdR4igOFXetoH9zyrwBm3HAsdha2Zw+f7tOMlmc7ls7td/J7zrrFQOXxyt8QEnphMd4iR1ZTXDLw5hXDoJDLydAqWzz/OKU2X8NWP9sQu+zPKg/IMxTRQs6dacwIicXco9gslexatUxnjBhYJ85/QzdxlzSWYaJ2bUiY2LShEck4X5RIGLxakEls58zljmLeCcqwq/1gwWDj6l3v0DwHREJVR0O054TnkksQu4dq876gT5AadAa9P0Hb3B4yRCtT+29MeOEnciKkp5sBOkFCEyHSileCvDf0mG/RTNv20n8A/dO+10xvabdvcL5jJ3Kie9fBLBbqQu0aJOolUMZhBt8NJAJ3rfiaH7dqEApZwB+ymWfftOJFc9aY9V8s5wMbCnctIbdyKU0gOqeOlm30lEHToJxjsxCwGO1xYMx6JdVBbgBANSdi+8TuJqSvG8w5dq+BjBFE4YT4/vr0907EeQbTCfKFqki4ETnk4unYh8Zg1/yrcspbeoK4qwvRAngOTiZDgfUdLtJHCJCQ+Z0gmvY8euMUI3tR0+2EzhxOeLmE4DDtTwm7AgJ5K6wdyTdiSpeO1vVL6+NL0T/b3zHZmnUggiObYTVtKwcgl8LtmsQoGyKCcM8ga76PIZcQU6EfQbxofJGZzgvFgJxgWKzLuO40/jhFdvxfA88PrLi8ix/d/An907xVQLaaXT3YscMqUTqC1EwRm3fiLjwnKvNo/pBIs0cbDwgC0s1An8I759XTnOH7ffNdlgqj61E76AMvYkfSjhe6V5TCcmrmJWB6u4MMNcoBPGO8vFoXfcfskfW7s8ZFonLO2MX3yEnqMojbBXxXXiCGJ0ZRsy7iKdQCUi4U1z7xVkF3d2J7huj4mxYQ/d2PahwhVTfniBcfuOwid94dOFcBT0vcXGCSI1m0O3jqePE8aK4f2daDlbKvIatsCmcsLKuJ7UX0cyxcWNxdEdpOFbMLM4QSl4H7BcLRmGbBglfh8wVNK7vJhOMAUJQhrPycAieGFjcXSHkSdRZnLCb/vzRTMhCAIF76fDLF8rXAqP4STFwwwGX0gpQbFQVGA8CxY67vQZueDZnDBdGX6uQFMiJ47rJ1ecwN6RGYHRgGzMV6YMBRfdoKjHCt8x0V3PyeXa4w2fK5jsZPSQ2ZzgGsHV50/s6HFmw7IaUSeapZUHLw18piRcrTOg20GMgVjHMnG/sPYxGnwP5KbPnyzQCQzKhSB8UEkMCkPPKRl2tWpH7tekq9VqZEIghb8Or1MvKthIgAuTuJ8+1ABu3eQ5JfVBbnFO8NRNXdfNkUp/uIn3NNm/TmzFjLwed8Tsz+Swm8bJ8sOJT6PfMST1QfZmTtZ+u2+fQZDkX6fuO+yqk/+wexYoUL5/lzsfhEru0eRe6K71fayuZtZ+a27cOydN97+5XHYQJzE+l7GWWQv5/ffl/30gT/4ox90CF89U99EAY7IT6YMBTbZx7z7nJeOHtlRV7d9DUmM8YBb5LEuMj4XdQWS5P+8OX85wMEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEHMzv8B4II2ceWSTlgAAAAASUVORK5CYII="
                    alt=""
                />
                <Button 
                    variant="contained"
                    onClick={signIn}
                    color="primary"
                >
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login
