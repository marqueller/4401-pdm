export default function Search() {
    function user(formData) {
        const query = formData.get("query");
        alert(`'You searched for '${query}'`);
    }

    return (
        <form action={user}>
            <label>Digite seu Nome:
                <input type="text" />
            </label>
            <label>Digite seu Email:
                <input type="email" />
            </label>
            <label>Digite seu Telefone:
                <input type="number" />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}