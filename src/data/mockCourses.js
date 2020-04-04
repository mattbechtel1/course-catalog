var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed elementum tempus egestas. Dolor magna eget est lorem. Sed faucibus turpis in eu mi. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nunc vel risus commodo viverra. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Etiam erat velit scelerisque in dictum non consectetur. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Justo eget magna fermentum iaculis eu non diam phasellus. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Velit aliquet sagittis id consectetur purus ut faucibus. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Elit at imperdiet dui accumsan sit amet nulla. Nec nam aliquam sem et. Nunc sed augue lacus viverra vitae congue eu. Et netus et malesuada fames ac turpis egestas maecenas. Proin gravida hendrerit lectus a. Id cursus metus aliquam eleifend mi in nulla. Augue neque gravida in fermentum et sollicitudin. Curabitur gravida arcu ac tortor dignissim convallis aenean. Sed augue lacus viverra vitae congue eu. Nulla facilisi cras fermentum odio eu feugiat pretium. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Tristique senectus et netus et malesuada fames. Turpis cursus in hac habitasse. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nibh venenatis cras sed felis eget velit. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Turpis egestas sed tempus urna et pharetra. Lobortis mattis aliquam faucibus purus in massa tempor. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Aliquam faucibus purus in massa tempor nec feugiat nisl. Cursus turpis massa tincidunt dui ut ornare lectus. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nibh cras pulvinar mattis nunc sed. Ullamcorper dignissim cras tincidunt lobortis. Nisl vel pretium lectus quam id leo in. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ultrices sagittis orci a scelerisque purus semper eget duis. Lectus quam id leo in vitae turpis massa sed. Tristique senectus et netus et malesuada. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Eu augue ut lectus arcu bibendum at varius vel.'

var SHORT_LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac. Egestas integer eget aliquet nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis. Urna id volutpat lacus laoreet non curabitur gravida. Nisl pretium fusce id velit. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Condimentum id venenatis a condimentum. Semper auctor neque vitae tempus quam pellentesque nec. Hac habitasse platea dictumst quisque. Eu volutpat odio facilisis mauris. Eu facilisis sed odio morbi quis commodo odio aenean sed. Quam nulla porttitor massa id. Pulvinar neque laoreet suspendisse interdum consectetur libero id. In iaculis nunc sed augue lacus viverra. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. In nibh mauris cursus mattis molestie a. In ante metus dictum at tempor commodo.'

export function courses() {
    return [{
        id: 1,
        title: 'Villains, Body, and Conversion in Biology',
        subjects: ['biology', 'anatomy'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://www.teachable.com',
        intro_course: true
    }, {
        id: 2,
        title: 'Haneke and Decision-Making in Molecular and Cellular Biology',
        subjects: ['biology', 'film'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://lynda.com',
        intro_course: false
    }, {
        id: 3,
        title: 'Courts, Application, and Evangelism',
        subjects: ['law', 'social issues'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://academicearth.org',
        intro_course: false
    }, {
        id: 4,
        title: 'Race, Institutions, and Computability in Infant Cognition',
        subjects: ['social issues', 'midwifery', 'obstetrics', 'patient care'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://thegreatcoursesplus.com',
        intro_course: false
    }, {
        id: 5,
        title: 'Composing, Service, and Sanitation',
        subjects: ['patient care', 'sanitation'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://coursera.org',
        intro_course: true
    }, {
        id: 6,
        title: 'Painting, Water, and Surveillance in Biomedical Research',
        subjects: ['research', 'sanitation', 'biology'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://www.edx.org',
        intro_course: true
    }, {
        id: 7,
        title: 'Interpretation, Improvement, and Microbes',
        subjects: ['research', 'bacteria'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://jhu.edu',
        intro_course: true
    }, {
        id: 8,
        title: 'Counter-Messaging and Nationalism in Biomedical Research',
        subjects: ['research', 'social issues', 'biology'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'https://tceols.cdc.gov/',
        intro_course: false
    }, {
        id: 9,
        title: 'Analysis, Inequality, and Body in Cognition, Emotion, and Psychopathology',
        subjects: ['research', 'social issues', 'psychology', 'patient care'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://yale.edu',
        intro_course: false
    }, {
        id: 10,
        title: 'Bacteria and Sensibility in Global Health',
        subjects: ['bacteria', 'infectious diseases', 'global health'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://udacity.com',
        intro_course: true
    }, {
        id: 11,
        title: 'Disease, Sequence, and Hubs',
        subjects: ['research', 'infectious diseases'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://udemy.com',
        intro_course: true
    }, {
        id: 12,
        title: 'Haneke, Community, and Epidemiology in Neuroscience',
        subjects: ['film', 'social issues', 'psychology', 'epidemiology'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://kajabi.com',
        intro_course: false
    }, {
        id: 13,
        title: 'Studies, Contagion, and Painting',
        subjects: ['research', 'infectious diseases'],
        description: LOREM_IPSUM,
        short_desc: SHORT_LOREM,
        pic_url: '',
        course_url: 'http://online-learning.harvard.edu',
        intro_course: false
    }]
}

export function users() {
    return [
        {
            id: 1,
            username: 'student1',
            password: 'sitel',
            restrictions: 'none',
            email: 'mockAdmin@jhu.edu',
            phone: '202-555-7777',
            completedCourses: [],
            saved: []
        }, {
            id: 2,
            username: 'student2',
            password: 'sitel',
            restrictions: 'introductory',
            email: 'mockStudent@aol.com',
            phone: '301-555-7777',
            completedCourses: [],
            saved: []
        }, {
            id: 3,
            username: 'student3',
            password: 'sitel',
            restrictions: 'approved_only',
            approved: [1, 3, 13],
            email: 'mockStudent3@kmail.com',
            phone: null,
            completedCourses: [1],
            saved: [1]
        }
    ]
}