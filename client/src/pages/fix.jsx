<form onSubmit={handleSubmit} className="space-y-6">
<div className="flex justify-between">
  {inputCode.map((digit, index) => (
    <input
      key={index}
      ref={(el) => (inputRefs.current[index] = el)}
      type="text"
      maxLength="6"
      value={digit}
      onChange={(e) => handleChange(index, e.target.value)}
      onKeyDown={(e) => handleKeyDown(index, e)}
      className="w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none"
    />
  ))}
</div>
{/* {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>} */}
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  type="submit"
  disabled={inputCode.some((digit) => !digit)}
  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
>
  {/* {isLoading ? "Verifying..." : "Verify Email"} */}
  Verify email
</motion.button>
</form>