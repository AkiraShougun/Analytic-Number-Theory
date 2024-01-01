function isPrime(n)
    if n<2
        return false
    end
    for i in 1:10
        if (i*i <=n && n%i ==0 )
            return false
        end
    end
    return true
end

function mobius(N)
    if N == 1
        return 1, "it's 1"
    end

    p = 0
    for i in 2:N
        if (N % i == 0 & isPrime(i))
 
            # Check if N is
            # divisible by i^2
            if (N % (i * i) == 0)
                return 0, "square"
            else
 
                # i occurs only once,
                # increase f
                p = p + 1
            end
        end
    end
 
    # All prime factors are
    # contained only once
    # Return 1 if p is even
    # else -1
    if (p % 2 != 0)
        return -1, "it's odd"
    else
        return 1, "it's even"
    end
end

