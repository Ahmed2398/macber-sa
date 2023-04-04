import egypt from '../assets/images/office/egypt.png'
import Dubai from '../assets/images/office/dubai.png'
import London from '../assets/images/office/london.png'
import Sa from '../assets/images/office/saudi.png'

import worldNetwork from '../assets/images/logos/World Network.svg'
import macber from '../assets/images/logos/MacberLogo.svg'

export const offices = [
    {
        id:1,
        country:'Egypt',
        address:'Ground Floor، District 3, Area 2, Talaat Harb Axis Apt. 2, Cairo Governorate',
        img:egypt,
        mapLink:"https://goo.gl/maps/csBszafSWWUm2gAH7",
        link:"https://www.google.com"
    },
    {
        id:2,
        country:'London',
        address:'Business Services, 7 Bell Yard,\n' +
            '\n' +
            'London, UK, WC2A 2JR',
        img:London,
        mapLink:"https://goo.gl/maps/jmmnKKnpt4BYpaH3A",
        link:"https://www.google.com"
    },
    // {
    //     id:3,
    //     country:'Dubai',
    //     address:'Ground Floor، District 3, Area 2, Talaat Harb Axis Apt. 2, Cairo Governorate',
    //     img:Dubai
    // },
    {
        id:4,
        country:'Riyadh',
        address:'2329 Makkah Al Mukarramah Branch Road, Al Rabwah, Riyadh\n' +
            'Saudi Arabia',
        img:Sa,
        mapLink:"https://goo.gl/maps/2j4a1YZkDzbErG6j8",
        link:"https://www.google.com"
    },
]