/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function openAppStore(){
    var OS = getMobileOperatingSystem();
     
    if(OS == "Windows Phone"){
        window.open("https://play.google.com/store/apps/details?id=com.vrgsoft.utopia");
    }else if(OS == "Android"){
        window.open("https://play.google.com/store/apps/details?id=com.vrgsoft.utopia");
    }else if (OS == "iOS"){
        window.open("https://apps.apple.com/gb/app/l-u-e-your-legal-checker/id1487650991");
    }
}


