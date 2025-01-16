const order = {};

        function addItem(flavor) {
            if (!order[flavor]) order[flavor] = 0;
            order[flavor]++;
            document.getElementById(`${flavor}-count`).textContent = order[flavor];
        }

        function removeItem(flavor) {
            if (order[flavor] && order[flavor] > 0) {
                order[flavor]--;
                document.getElementById(`${flavor}-count`).textContent = order[flavor];
            }
        }

        function makeOrder(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;
            const phone = document.getElementById('phone').value;
            const contact = document.getElementById('contact').value;

            let orderText = "Pedido de Doces:\n";
            for (const flavor in order) {
                if (order[flavor] > 0) {
                    orderText += `- ${flavor}: ${order[flavor]}\n`;
                }
            }

            orderText += `\nNome: ${name}\nEndereço: ${address}\nTelefone: ${phone}\nContato: ${contact}`;

            const whatsappURL = `https://api.whatsapp.com/send?phone=5535988951842&text=${encodeURIComponent(orderText)}`;
            window.open(whatsappURL, '_blank');
        }