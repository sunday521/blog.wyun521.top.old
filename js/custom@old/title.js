var titleTime, OriginTitile = document.title;
document.addEventListener("visibilitychange", (function () {
    document.hidden ? (document.title = "跑哪里去了~",
        clearTimeout(titleTime)) : (document.title = "你可算回来了哇",
            titleTime = setTimeout((function () {
                document.title = OriginTitile
            }
            ), 2e3))
}
));
