# CodeAlpha_SecureCodingReview
codealpha cyber security internship task 3
# 🔐 CodeAlpha – Secure Coding Review (Node.js + Express)
## 👨‍💻 Author: Sai Tarun  
**Internship Domain:** Cyber Security  
**Task 3:** Secure Coding Review  
**Technology Used:** Node.js, Express.js, bcrypt, helmet, express-validator
## Project Objective
This project demonstrates the **identification and remediation of security flaws** in a simple Node.js-based login system.

I started with a **vulnerable login API** (with hardcoded plaintext credentials) and converted it into a **secure, production-ready system** by applying best practices from OWASP.

## Folder Structure
CodeAlpha_SecureCodingReview/
├── vulnerable_code.js # Insecure version
├── secure_code.js # Secure version with fixes
├── report.md # Document with analysis & fixes
├── README.md # Project overview
└── screenshots/ # Output samples (success, fail, validation)

## Vulnerabilities Found in Original Code
- Plaintext password storage
- No input validation/sanitization
- No password hashing
- No security headers (open to XSS/clickjacking)
- Hardcoded user data

## Fixes Applied in `secure_code.js`

| Fix | Description |
|-----|-------------|
| `bcrypt` | Hashes passwords securely |
| `express-validator` | Validates/sanitizes login fields |
| `helmet` | Adds essential security headers |
| `express.json()` | Ensures correct request parsing |
| Proper response codes | Error handling added for bad input |

##  Libraries Used

- `express` – web server
- `bcrypt` – password hashing
- `express-validator` – input sanitization
- `helmet` – secure HTTP headers

##  Screenshots (in `/screenshots/` folder)

- `secure_output_success.png` – Successful login
- `secure_output_fail.png` – Password mismatch
- `secure_output_validation.png` – Validation error response

##  How to Run

1. Install dependencies:

2. Run:

3. Test with Postman or curl:
```json
{
  "username": "admin",
  "password": "admin123"
}
