(function() {
    mstrmojo.requiresCls(
           
            "mstrmojo.ContextMenu",
            "mstrmojo._HasContextMenu"
           
            );
    
    var _loaded = false,
        scrollStep = 20; 
    
    function _jumpTo (me, p) {
        var sb = me.itemsContainerNode;
        sb.scrollTop = Math.min(Math.max(sb.scrollTop + p , 0), sb.scrollHeight - sb.offsetHeight);
    }
    
    function _fireJumps(me, up){
        if (!me._scrollInter){
            var p = scrollStep * (up ? -1:1);
            me._scrollInter = window.setInterval(
                                    function() {
                                        _jumpTo(me, p);
                                    }, 
                                    50);    // was 100, too sluggish
        }
    }
    
    function _stopJumps(me){
        if (me._scrollInter) {
            window.clearInterval(me._scrollInter);
            me._scrollInter = null;
        }        
    }
    
    mstrmojo.QB.QContextMenu = mstrmojo.declare(

            // superclass
            mstrmojo.ContextMenu,
            
            // mixins
            [mstrmojo._HasContextMenu],
            
            {
                scriptClass: 'mstrmojo.QB.QContextMenu'
                

               
    }); //end declare()
    

})();