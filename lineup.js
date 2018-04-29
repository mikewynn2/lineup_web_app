var a = ['mike', 'dan', 'christian', 'trevor', 'jess'];
var b = ['mike','sarah','kenny','trevor','dennis','jeff'];
var c = ['pavel','sean','kenny','chris','lucas','elizibeth'];
var d = ['sarah','sean','allison','jules','trevor','jeff'];
var e = ['sarah','sean','jules','trevor','chris'];
var f = ['val','kirk','pavel','sean','kenny','chris','lucas','elizibeth'];
var g = ['mike','sarah','kenny','trevor','dennis','jeff'];
var h = ['val','sarah','allison','kenny','trevor','lucas'];


function randomChoice(list) {
    return (list[Math.floor(Math.random() * list.length)]);
};
var barge = []
while (barge.length < 8) {
    var barge = []
    var used = []
    var alpha = randomChoice(a);
    if (!used.includes(alpha)) {
        barge.push(alpha);
        used.push(alpha);
        var bravo = randomChoice(b);
        if (!used.includes(bravo)) {
            barge.push(bravo);
            used.push(bravo);
            var charlie = randomChoice(c);
            if (!used.includes(charlie)) {
                barge.push(charlie);
                used.push(charlie);
                var delta = randomChoice(d);
                if (!used.includes(delta)) {
                    barge.push(delta);
                    used.push(delta);
                    var echo = randomChoice(e);
                    if (!used.includes(echo)) {
                        barge.push(echo);
                        used.push(echo);
                        var foxtrot = randomChoice(f);
                        if (!used.includes(foxtrot)) {
                            barge.push(foxtrot);
                            used.push(foxtrot);
                            var golf = randomChoice(g);
                            if (!used.includes(golf)) {
                                barge.push(golf);
                                used.push(golf);
                                var hotel = randomChoice(h);
                                if (!used.includes(hotel)) {
                                    barge.push(hotel);
                                    used.push(hotel);
                                }
                            }}}}}}}};
webix.ready(function() {

    webix.ui({
        rows: [
            {
                view:'toolbar',
                cols: [
                    {view: 'label', id: 'title', label: 'CDLM Lineup Creator', height: 20, align: 'center'},
                    {view: 'button', value: 'Create New Lineup', width:150, height:50, align:'right'}
                ]
            },
            {
                cols: [
                    {
                    view:'list',
                    select:true,
                    yCount:8,
                    data: barge,}
                ]
            }
        ]
    })})

