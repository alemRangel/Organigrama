var config = {
        container: "#basic-example",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    ceo = {
        text: {
            name: "daniel",
            title: "Chief executive officer",
            contact: "Tel: 00 00",
        },
        link: {
            href: "https://localhost:44313/Organization?level=1&id=1"
        },
    },

    cto = {
        parent: ceo,
        text:{
            name: "Joe Linux",
            title: "Chief Technology Officer",
        },
        stackChildren: true,
        link: {
            href: "https://localhost:44313/Organization?level=2&id=2"
        },
    },
    cbo = {
        parent: ceo,
        stackChildren: true,
        text:{
            name: "Linda May",
            title: "Chief Business Officer",
        },
        link: {
            href: "https://localhost:44313/Organization?level=2&id=3"
        },
    },
    cdo = {
        parent: ceo,
        text:{
            name: "John Green",
            title: "Chief accounting officer",
            contact: "Tel: 01 213 123 134",
        },
        link: {
            href: "https://localhost:44313/Organization?level=2&id=4"
        },
    },
    cio = {
        parent: cto,
        text:{
            name: "Ron Blomquist",
            title: "Chief Information Security Officer"
        },
    },
    ciso = {
        parent: cto,
        text:{
            name: "Michael Rubin",
            title: "Chief Innovation Officer",
            contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
    },
    cio2 = {
        parent: cdo,
        text:{
            name: "Erica Reel",
            title: "Chief Customer Officer"
        },
        link: {
            href: "https://localhost:44313/Organization?level=3&id=5"
        },
    },
    ciso2 = {
        parent: cbo,
        text:{
            name: "Alice Lopez",
            title: "Chief Communications Officer"
        },
    },
    ciso3 = {
        parent: cbo,
        text:{
            name: "Mary Johnson",
            title: "Chief Brand Officer"
        },
    },
    ciso4 = {
        parent: cbo,
        text:{
            name: "Kirk Douglas",
            title: "Chief Business Development Officer"
        },
    }


    chart_config = [
        config,
        ceo,
        cto,
        cbo,
        cdo,
        cio,
        ciso,
        cio2,
        ciso2,
        ciso3,
        ciso4
    ];




    // Another approach, same result
    // JSON approach

/*
    var chart_config = {
        chart: {
            container: "#basic-example",
            
            connectors: {
                type: 'step'
            },
            node: {
                HTMLclass: 'nodeExample1'
            }
        },
        nodeStructure: {
            text: {
                name: "Mark Hill",
                title: "Chief executive officer",
                contact: "Tel: 01 213 123 134",
            },
            image: "../headshots/2.jpg",
            children: [
                {
                    text:{
                        name: "Joe Linux",
                        title: "Chief Technology Officer",
                    },
                    stackChildren: true,
                    image: "../headshots/1.jpg",
                    children: [
                        {
                            text:{
                                name: "Ron Blomquist",
                                title: "Chief Information Security Officer"
                            },
                            image: "../headshots/8.jpg"
                        },
                        {
                            text:{
                                name: "Michael Rubin",
                                title: "Chief Innovation Officer",
                                contact: "we@aregreat.com"
                            },
                            image: "../headshots/9.jpg"
                        }
                    ]
                },
                {
                    stackChildren: true,
                    text:{
                        name: "Linda May",
                        title: "Chief Business Officer",
                    },
                    image: "../headshots/5.jpg",
                    children: [
                        {
                            text:{
                                name: "Alice Lopez",
                                title: "Chief Communications Officer"
                            },
                            image: "../headshots/7.jpg"
                        },
                        {
                            text:{
                                name: "Mary Johnson",
                                title: "Chief Brand Officer"
                            },
                            image: "../headshots/4.jpg"
                        },
                        {
                            text:{
                                name: "Kirk Douglas",
                                title: "Chief Business Development Officer"
                            },
                            image: "../headshots/11.jpg"
                        }
                    ]
                },
                {
                    text:{
                        name: "John Green",
                        title: "Chief accounting officer",
                        contact: "Tel: 01 213 123 134",
                    },
                    image: "../headshots/6.jpg",
                    children: [
                        {
                            text:{
                                name: "Erica Reel",
                                title: "Chief Customer Officer"
                            },
                            link: {
                                href: "http://www.google.com"
                            },
                            image: "../headshots/10.jpg"
                        }
                    ]
                }
            ]
        }
    };

*/