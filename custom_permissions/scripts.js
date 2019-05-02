readOnly();

function readOnly() {
    let hello = document.querySelectorAll('[value="submit"]');

    console.log(hello[1]);

    for(i = 0; i < hello.length; i++) {
        hello[i].disabled = true;
    }
}

