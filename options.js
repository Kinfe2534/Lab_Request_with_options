// Saves options to chrome.storage
function save_options() {
    let specificLocation = document.getElementById('specificLocation').value;
    let barcode = document.getElementById('barcode').value;
    let sampleCollectedBy = document.getElementById('sampleCollectedBy').value;
    let formCompletedBy = document.getElementById('formCompletedBy').value;

    let speed=document.getElementById('speed').value;
    let occupation_Scrolldown=document.getElementById('occupation_Scrolldown').value;
    let occupation=document.getElementById('occupation').value;

    let typeOfSpecimen=document.getElementById('typeOfSpecimen').value;

    let locationSC_Scrolldown=document.getElementById('locationSC_Scrolldown').value;
    let locationSC=document.getElementById('locationSC').value;
    
    
    chrome.storage.sync.set({
        specificLocation_Storage_API:specificLocation,
        barcode_Storage_API:barcode,
        sampleCollectedBy_Storage_API:sampleCollectedBy,
        formCompletedBy_Storage_API:formCompletedBy,

        speed_Storage_API:speed,
        occupation_Scrolldown_Storage_API:occupation_Scrolldown,
        occupation_Storage_API:occupation,
        typeOfSpecimen_Storage_API:typeOfSpecimen,
        locationSC_Scrolldown_Storage_API:locationSC_Scrolldown,
        locationSC_Storage_API:locationSC
        
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {status.textContent = '';}, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({  
        specificLocation_Storage_API:'Unknown',
        barcode_Storage_API:'',
        sampleCollectedBy_Storage_API:'Unknown',
        formCompletedBy_Storage_API:'Unknown',
        speed_Storage_API:'150',
        occupation_Scrolldown_Storage_API:'750',
        occupation_Storage_API:'8',
        typeOfSpecimen_Storage_API:'3',
        locationSC_Scrolldown_Storage_API:'10',
        locationSC_Storage_API:'2'

    }, function(result) {
        document.getElementById('specificLocation').value=result.specificLocation_Storage_API;
        document.getElementById('barcode').value=result.barcode_Storage_API;
        document.getElementById('sampleCollectedBy').value=result.sampleCollectedBy_Storage_API;
        document.getElementById('formCompletedBy').value=result.formCompletedBy_Storage_API;
        document.getElementById('speed').value=result.speed_Storage_API;
        document.getElementById('occupation_Scrolldown').value=result.occupation_Scrolldown_Storage_API;
        document.getElementById('occupation').value=result.occupation_Storage_API;
        document.getElementById('typeOfSpecimen').value=result.typeOfSpecimen_Storage_API;        
        document.getElementById('locationSC_Scrolldown').value=result.locationSC_Scrolldown_Storage_API;
        document.getElementById('locationSC').value=result.locationSC_Storage_API;
    });
  }

  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',save_options);
