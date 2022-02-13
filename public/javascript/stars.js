


$('.solid-stars').raty(
    {
    score: function() {
        return $(this).data('score');
    },
    click: function(score, data) {
        var id = $(this).data('id');
        console.log(score)

        // commentRating = score
        // $.post('/api/posts/upvote',{rating: score, id:id}, function(data){alert(data)})
    },
    starType: 'i'
    
});

