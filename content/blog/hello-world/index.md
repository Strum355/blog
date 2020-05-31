---
title: BlogPost<HelloWorld>
date: "2020-05-31T18:29:00.000Z"
description: "Welp here we go...!"
---

Hello and welcome to my blog that I never thought I'd actually start!

With a bit of downtime after college concluded and in between the job hunting, I finally
decided to checkout Netlify with a blog of course!

Hopefully I'll end up putting some interesting (or not) posts up here over time : )

Be sure to check back often!

---

To finish off this intro, a condensed example of one of my favourite snippets of code I've written:

```go
import (
    "context"
    lxd "github.com/lxc/lxd/client"
)

// OperationTimeout returns a context exceeded error and cancels the on-going
// operation in the background if the deadline from the context is exceeded.
func OperationTimeout(ctx context.Context, op lxd.Operation) error {
    opChannel := make(chan error)
    go func() {
        opChannel <- op.Wait()
        close(opChannel)
    }()

    select {
    case err := <-opChannel:
        return err
    case <-ctx.Done():
        go op.Cancel()
        return ctx.Err()
    }
}
```
