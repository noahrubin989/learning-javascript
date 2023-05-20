function volume_sphere() {
    let radius_obj = document.querySelector('#radius');
    let volume_obj = document.querySelector('#volume');

    let r = Math.abs(radius_obj.value);  // handle negative input
    let v = (4/3) * Math.PI * Math.pow(r, 3);
    let roundedV = v.toFixed(3);

    volume_obj.value = roundedV;
}