console.log('Warsztat - Pobierz dane po kliknieciu przycisku');


let btnGetData = document.getElementById('get-data');

const getData = () => {

// Wykonanie zapytan na serwer robi sie poprzez API. Zapytanie wykonuje sie na frontendzie, obbiera je backhend, wykonuke okreslone dla tego API operacje i koncowa odpowiedz wysyla na frontend. API jest stworzone na beckhendzie. Dane pomiedzy interfejsami sa przesylane w formacie JSON.(Obiekt JS przerobiony na string). Metody do wykonania zapytan sa rozne np.fetch, getJSON, roznia sie delikatnie skladnia ale wszystkie robia to samo i nie ma znaczenia ktorej gdzie uzyjesz. 

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res =>res.json())
        .then(data => {

// Niektore strony uzywaja duzych pokladow danych, te dane sa przechowywane w bazach danych, i aby front mial dostep do tych danych posredniczy

// Zapytania wykonuje sie asynchronicznie, czyli cala strona jest zaladowana a dzieki wykonywaniu zapytan odswiezamy niektore jej fragmenty..

// Przykladem jest odswiezanie sie kursow walut na stronie, doladowywanie sie postow na stronie,np zegar odliczajacy czas do jakiegos wydarzenia.

            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            

            pId.innerText = `Post ID: ${data.id}`;
            pUserId.innerText = `User ID: ${data.UserId}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;

            document.body. appendChild(pId);
            document.body. appendChild(pUserId);
            document.body. appendChild(pTitle);
            document.body. appendChild(pBody);

            
            console.log(data);
        })

        .catch(error => {
            console.error('error');
        })



    console.log('getData()');
}


btnGetData.addEventListener('click', getData);








