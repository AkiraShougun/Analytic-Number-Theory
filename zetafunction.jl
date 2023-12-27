using SpecialFunctions
using Plots

function convert_to_imaginary(arr)
    return [(0.5 + x * im) for x in arr]
end





z = collect(-10:0.01:20)
imag_z = convert_to_imaginary(z)
spectrum = zeta.(imag_z)
x_val = real(spectrum)
y_val = imag(spectrum)

theme(:dracula)

p = plot(x_val,y_val,legend=false,framestyle=:origin,color="cyan",background_color=:transparent)


savefig(p,"static/zetamodified.png")



