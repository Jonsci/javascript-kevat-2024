var puhelimet = ["One plus", "Apple", "Samsung", "HTC", "Huawei" ]

for (let i = 0; i < puhelimet.length; i++) {
    console.log("Puhelin " + (i+1) +" " + puhelimet[i])
}

puhelimet.forEach(p =>
    console.log("Puhelin on " + p)

)

puhelimet.map(p =>
    console.log("Puhelin on " + p)

)