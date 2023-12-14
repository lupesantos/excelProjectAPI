function converCLT(req, res) {
    var salary = req.query.salary; // string
    var newSalary = Number(salary) + (Number(salary) * 0.3);
    res.send({
        resultado: "teste ".concat(newSalary),
    });
}
export { converCLT };
