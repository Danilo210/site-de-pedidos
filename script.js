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
            const number = document.getElementById('number').value;
            const complement = document.getElementById('complement').value;
            const contact = document.getElementById('contact').value;
            const obs = document.getElementById('obs').value;

            let orderText = "Pedido de Doces:\n";
            for (const flavor in order) {
                if (order[flavor] > 0) {
                    orderText += `- ${flavor}: ${order[flavor]}\n`;
                }
            }

            orderText += `\nNome: ${name}\nEndereço: ${address}\nNumero residência: ${number}\nComplemento: ${complement}\nContato: ${contact}\nObservação: ${obs}`;

            const whatsappURL = `https://api.whatsapp.com/send?phone=5535988951842&text=${encodeURIComponent(orderText)}`;
            window.open(whatsappURL, '_blank');
        }