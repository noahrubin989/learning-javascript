function removecolor() {
    const selectObj = document.querySelector('#colorSelect');  // left dropdown
    let selectedItemIdx = selectObj.selectedIndex;
    // console.log(`Index ${selectedItemIdx} removed`);
    selectObj.remove(selectedItemIdx);
}





