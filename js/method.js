  let form = document.querySelector("form");
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let data = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbxkCbT4odMBwsbda9HG2vSRVKhYls0KojZPVEclP_PVMzlwXlS670pqN2mNIoWE1IjxUw/exec'),
          {
            method: "POST",
            body: data
          })
          .then(res => res.text())
          .then(data => console.log(data));
      })


       let form = document.querySelector("form");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let data = new FormData(form);
            fetch('Paste_Your_Api_EndPoint_Url', {
                    method: "POST",
                    body: data
                })
                .then(res => res.text())
                .then(data => console.log(data));
        })