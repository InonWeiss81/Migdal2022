export class Dropdown {
    contactPersonType = [
        { code: 1, value: 'מבוטח' },
        { code: 2, value: 'סוכן' },
        { code: 3, value: 'בן/בת זוג' },
    ]

    submitedBy = [
        { code: 1, value: 'מבוטח' },
        { code: 2, value: 'סוכן' },
        { code: 3, value: 'בן/בת זוג' },
    ]

    superClaimType = [
        { code: 1, value: "התביעה אושרה" },
        { code: 2, value: "התביעה נדחתה" },
        { code: 4, value: "טרם התקבלה החלטה" }
    ]

    claimCause = [
        { code: 1, value: "תאונה" },
        { code: 2, value: "מחלה" },
        { code: 5, value: "תאונת עבודה" },
        { code: 6, value: "אחר" },
    ]

    injuryType = [
        { code: 1, value: "אגן" },
        { code: 2, value: "גפיים" },
        { code: 5, value: "ראש" },
        { code: 6, value: "גב" },
        { code: 7, value: "לב" },
        { code: 9, value: "נפש" },
    ]

    submitionMethod = [
        { code: 1, value: 'דואר' },
        { code: 2, value: 'דיגיטל' },
        { code: 3, value: 'פקס' },
    ]
    
    identityTypes = [
        { code: 1, value: 'ת.ז.' },
        { code: 2, value: 'דרכון' },
        { code: 3, value: 'מבוטח' },
        { code: 4, value: 'מפעל' }
    ]
}
