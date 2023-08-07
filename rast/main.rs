
// variables en Rust

fn main() {
    // variables mutables
    let mut x = 5;
    println!("El valor de x es: {}", x);
    x = 6;
    println!("El valor de x es: {}", x);

    // variables inmutables
    let y = 5;
    println!("El valor de y es: {}", y);
    // y = 6; // error: cannot assign twice to immutable variable `y`
    println!("El valor de y es: {}", y);

    // constantes
    const Z: u32 = 5;
    println!("El valor de Z es: {}", Z);
    // Z = 6; // error: cannot assign twice to immutable variable `Z`
    println!("El valor de Z es: {}", Z);

    // shadowing
    let a = 5;
    println!("El valor de a es: {}", a);
    let a = a + 1;
    println!("El valor de a es: {}", a);
    let a = a * 2;
    println!("El valor de a es: {}", a);

    // shadowing con tipos de datos diferentes
    let spaces = "   ";
    println!("El valor de spaces es: {}", spaces);
    let spaces = spaces.len();
    println!("El valor de spaces es: {}", spaces);
}

fn suma(x: i32, y: i32) -> i32 {
    x + y
}

fn resta(x: i32, y: i32) -> i32 {
    x - y
}

fn multiplicacion(x: i32, y: i32) -> i32 {
    x * y
}

fn division(x: i32, y: i32) -> i32 {
    x / y
}

fn residuo(x: i32, y: i32) -> i32 {
    x % y
}

fn potencia(x: i32, y: i32) -> i32 {
    x.pow(y as u32)
}

fn raiz_cuadrada(x: i32) -> f64 {
    (x as f64).sqrt()
}

fn raiz_cubica(x: i32) -> f64 {
    (x as f64).cbrt()
}

fn raiz_n(x: i32, y: i32) -> f64 {
    (x as f64).powf(1.0 / (y as f64))
}