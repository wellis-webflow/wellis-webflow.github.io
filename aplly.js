function AddRecordId() {
  let urlParams = new URLSearchParams(window.location.search);
  let identifierValue = urlParams.get('identifier');
  if (identifierValue) {
    let continueButton = document.getElementById('continueButton');
    if (continueButton) {
      let buttonUrl = new URL(continueButton.href);
      buttonUrl.searchParams.set(`${encodeURIComponent('extra_fields[record_id]') + '='}`, identifierValue);
      continueButton.href = buttonUrl.toString();
    }
  }
}

AddRecordId();