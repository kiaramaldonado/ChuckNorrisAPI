const quote = document.querySelector('#quote');
const buttonRefresh = document.querySelector('#refresh_btn');

async function updateQuote() {
    try {
        const data = await cargarDatos(endPoint);
        if (!data || data.error) {
            quote.textContent = 'No Chuck Norris joke for you.';
        } else {
            quote.textContent = data.value;
        }
    } catch (error) {
        quote.textContent = 'Error, sorry.';
    }
}

buttonRefresh.addEventListener('click', updateQuote);

updateQuote();
