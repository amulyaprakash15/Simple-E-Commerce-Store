// shop/static/shop/script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Action performed!");
        });
    });
});
<script src="{% static 'shop/script.js' %}"></script>
