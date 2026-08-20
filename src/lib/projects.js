// helpers
const openLink = (link) => {
    window.open(link, '_blank');
}


// open LCR
export const LCR_IOS_LINK = 'https://apps.apple.com/fr/app/lcr/id6749589650'
export const LCR_ANDROID_LINK = 'https://play.google.com/store/apps/details?id=com.vnb_it.LCR'
export const openLCR = () => {
    openLink(LCR_IOS_LINK || LCR_ANDROID_LINK);
}


// open LCR Pro
export const LCR_PRO_IOS_LINK = 'https://apps.apple.com/fr/app/lcr-pro/id6751716678'
export const LCR_PRO_ANDROID_LINK = 'https://play.google.com/store/apps/details?id=com.vnbit.LCRPro'
export const openLCRPro = () => {
    openLink(LCR_PRO_IOS_LINK || LCR_PRO_ANDROID_LINK);
}


// open Nexuroom
export const NEXUROOM_APP_LINK = 'https://nexuroom.com/auth/student/login'
export const openNexuroom = () => {
    openLink(NEXUROOM_APP_LINK);
}



// open Void MA
export const VOID_MA_SITE_LINK = 'https://void-ma.vercel.app/'
export const openVoidMA = () => {
    openLink(VOID_MA_SITE_LINK);
}

